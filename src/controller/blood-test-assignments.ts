export function bloodTestAssignments(requests: number[], teams: number): number[] {
  const sortedRequests = requests.sort((a, b) => a - b);
  const teamsAvailability: { team: number, avail: boolean, requests: number }[] = []

  // populate teams
  for (let i = 0; i < teams; i++) {
    teamsAvailability.push({ team: i + 1, avail: true, requests: 0 })
  }

  const teamAssignments: number[] = []

  for (let i = 0; i < sortedRequests.length; i++) {
    const availableTeam = teamsAvailability.find(team => team.avail);

    if (availableTeam) {
      availableTeam.requests = sortedRequests[i];
      availableTeam.avail = false;

      teamAssignments.push(availableTeam.team)
    } else {
      const availableTeam = teamsAvailability.find((team) => team.requests + 2 <= sortedRequests[i])

      if (availableTeam) {
        if (teamAssignments[i - 1] === availableTeam.team) {
          const anotherAvailableTeam = teamsAvailability.find((team) => team.team !== teamAssignments[i - 1] && team.requests + 2 <= sortedRequests[i])
          console.log(anotherAvailableTeam)
          if (anotherAvailableTeam) {
            anotherAvailableTeam.requests = sortedRequests[i];
            anotherAvailableTeam.avail = false;
            teamAssignments.push(anotherAvailableTeam.team)
            continue;
          }
        }
        availableTeam.requests = sortedRequests[i];
        availableTeam.avail = false;

        teamAssignments.push(availableTeam.team)
      } else {
        teamAssignments.push(0)
      }
    }
  }

  return teamAssignments;
}
