<script lang="ts">
  import { teams, type Game, page } from "../store";
  import { games, rounds } from "../store";
  import { get } from "svelte/store";
  import Boules from "./Boules.svelte";
  import Ranking from "./Ranking.svelte";

  const [current, max] = get(rounds);
  const nextRound = current + 1;
  // FIXME more solid rounds
  let isFinalRound = current === max;

  let showRoundHistory = false;

  function createNextRound() {
    rounds.next();
    games.createNextRound(nextRound);
    page.set("play");
  }

  function toggleRoundHistory() {
    showRoundHistory = !showRoundHistory;
  }

  function getTeamName(teamId: string): string {
    const team = $teams.find(({ id }) => id === teamId);
    return team?.name ?? teamId;
  }

  // Group games by round number
  $: roundNumbers = [...new Set($games.map((g) => g.round))].sort((a, b) => a - b);
  $: gamesByRound = roundNumbers.map((r) => ({
    round: r,
    games: $games.filter((g) => g.round === r),
  }));
</script>

<Ranking showRank />

{#if isFinalRound}
  <Boules title="fin 🏆 !" />

  <div class="round-history-toggle">
    <button class="current" on:click={toggleRoundHistory}>
      {showRoundHistory ? "▲ Hide Round Details" : "▼ View Round Details"}
    </button>
  </div>

  {#if showRoundHistory}
    <section class="round-history">
      <h3>Round-by-Round History</h3>
      {#each gamesByRound as { round, games: roundGames }}
        <div class="round-block">
          <h4>Round {round}</h4>
          <table>
            <thead>
              <tr>
                <th>Home</th>
                <th>Score</th>
                <th>Visitor</th>
              </tr>
            </thead>
            <tbody>
              {#each roundGames as game}
                <tr>
                  <td class:winner={game.homeScore > game.visitorScore}>{getTeamName(game.home)}</td>
                  <td class="score">{game.homeScore} – {game.visitorScore}</td>
                  <td class:winner={game.visitorScore > game.homeScore}>{getTeamName(game.visitor)}</td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      {/each}
    </section>
  {/if}
{:else}
  <Boules handleClick={createNextRound} title={`Next Round ${nextRound}`} info="Regarding ranking" />
{/if}

<style>
  .round-history-toggle {
    margin: 1rem 0 0.5rem 0;
    text-align: center;
  }

  .round-history {
    width: 100%;
    max-width: 600px;
    margin: 0 auto 2rem auto;
  }

  .round-history h3 {
    text-align: center;
    margin-bottom: 0.5rem;
  }

  .round-block {
    margin-bottom: 1.2rem;
  }

  .round-block h4 {
    margin-bottom: 0.3rem;
  }

  .round-block table {
    width: 100%;
    border-collapse: collapse;
    font-size: 0.9em;
  }

  .round-block th,
  .round-block td {
    padding: 4px 8px;
    border: 1px solid #ddd;
    text-align: center;
  }

  .round-block th {
    background-color: #f0f0f0;
  }

  .score {
    font-weight: bold;
    white-space: nowrap;
  }

  .winner {
    font-weight: bold;
  }
</style>
