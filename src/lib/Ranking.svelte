<script lang="ts">
  import { teams } from "../store";
  import SvelteTable from "svelte-table";
  // import { Table } from "agnostic-svelte"; TODO try
  import { trans } from "../trans";
  export let showRank = false;

  const columns = [
    {
      key: "name",
      label: "Name",
      title: trans("name"),
      value: (row) => row.name,
      sortable: true,
    },
    {
      key: "members",
      label: "Members",
      title: trans("players"),
      value: (row) => row.members.map((m) => m.name).join(", "),
      sortable: true,
    },
  ];

  if (showRank) {
    columns.unshift(
      {
        key: "rank",
        label: "Rank",
        title: "rank",
        value: (row) => row.rank,
        sortable: true,
      },
      {
        key: "wins",
        label: "Victories",
        title: trans("wins"),
        value: (row) => row.wins,
        sortable: true,
      },
      {
        key: "pointsDiff",
        label: "PointsDiff",
        title: "diff",
        value: (row) => row.pointsDiff,
        sortable: true,
      },
      {
        key: "pf",
        label: "PF",
        title: "Points For",
        value: (row) => row.pointsWon,
        sortable: true,
      },
      {
        key: "pa",
        label: "PA",
        title: "Points Against",
        value: (row) => row.pointsLost,
        sortable: true,
      }
    );
  }
</script>

{#if showRank}
  <p class="ranking-info">
    Ranking criteria (in order): 1. Wins · 2. Point differential · 3. Points For (PF) · 4. Team name (alphabetical)
  </p>
{/if}

<SvelteTable rows={$teams} {columns} />

<style>
  .ranking-info {
    font-size: 0.8em;
    color: #555;
    margin: 0.3rem 0 0.6rem 0;
    text-align: center;
  }
</style>
