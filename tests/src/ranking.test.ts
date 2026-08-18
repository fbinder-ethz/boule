import {describe, expect, it} from 'vitest'
import {rankingComparator} from '../../src/store'
import type {Team} from '../../src/store'

function makeTeam(overrides: Partial<Team> & {id: string; name: string}): Team {
	return {
		members: [],
		wins: 0,
		pointsWon: 0,
		pointsLost: 0,
		pointsDiff: 0,
		...overrides,
	}
}

describe('rankingComparator', () => {
	it('sorts by wins descending', () => {
		const a = makeTeam({id: '1', name: 'A', wins: 3})
		const b = makeTeam({id: '2', name: 'B', wins: 1})
		const sorted = [b, a].sort(rankingComparator)
		expect(sorted[0]).toBe(a)
		expect(sorted[1]).toBe(b)
	})

	it('sorts by pointsDiff when wins are equal', () => {
		const a = makeTeam({id: '1', name: 'A', wins: 2, pointsDiff: 5})
		const b = makeTeam({id: '2', name: 'B', wins: 2, pointsDiff: 2})
		const sorted = [b, a].sort(rankingComparator)
		expect(sorted[0]).toBe(a)
		expect(sorted[1]).toBe(b)
	})

	it('sorts by pointsWon (gross points) when wins and pointsDiff are equal', () => {
		const a = makeTeam({id: '1', name: 'A', wins: 2, pointsDiff: 3, pointsWon: 15})
		const b = makeTeam({id: '2', name: 'B', wins: 2, pointsDiff: 3, pointsWon: 10})
		const sorted = [b, a].sort(rankingComparator)
		expect(sorted[0]).toBe(a)
		expect(sorted[1]).toBe(b)
	})

	it('sorts alphabetically by name as deterministic fallback', () => {
		const a = makeTeam({id: '1', name: 'Alpha', wins: 1, pointsDiff: 2, pointsWon: 8})
		const b = makeTeam({id: '2', name: 'Beta', wins: 1, pointsDiff: 2, pointsWon: 8})
		const sorted = [b, a].sort(rankingComparator)
		expect(sorted[0]).toBe(a)  // Alpha before Beta
		expect(sorted[1]).toBe(b)
	})

	it('produces deterministic ordering for fully tied teams', () => {
		const teams = [
			makeTeam({id: '3', name: 'Charlie', wins: 0, pointsDiff: 0, pointsWon: 0}),
			makeTeam({id: '1', name: 'Alpha', wins: 0, pointsDiff: 0, pointsWon: 0}),
			makeTeam({id: '2', name: 'Beta', wins: 0, pointsDiff: 0, pointsWon: 0}),
		]
		const sorted = [...teams].sort(rankingComparator)
		expect(sorted.map((t) => t.name)).toEqual(['Alpha', 'Beta', 'Charlie'])
	})

	it('applies full tie-break chain correctly across mixed teams', () => {
		const t1 = makeTeam({id: '1', name: 'Z', wins: 3, pointsDiff: 10, pointsWon: 30})
		const t2 = makeTeam({id: '2', name: 'Y', wins: 3, pointsDiff: 5, pointsWon: 25})
		const t3 = makeTeam({id: '3', name: 'X', wins: 3, pointsDiff: 5, pointsWon: 30})
		const t4 = makeTeam({id: '4', name: 'W', wins: 2, pointsDiff: 10, pointsWon: 40})
		const sorted = [t4, t2, t1, t3].sort(rankingComparator)
		// t1: 3W 10d 30p, t3: 3W 5d 30p, t2: 3W 5d 25p, t4: 2W 10d 40p
		expect(sorted[0]).toBe(t1)
		expect(sorted[1]).toBe(t3)
		expect(sorted[2]).toBe(t2)
		expect(sorted[3]).toBe(t4)
	})
})
