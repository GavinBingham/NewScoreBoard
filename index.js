homeScore = 0
guestScore = 0
homePt = document.getElementById("home-pt")
guestPt = document.getElementById("guest-pt")
homePt.textContent = homeScore
guestPt.textContent = guestScore

function addScore(team, value) {
  if(team === 'home') {
    homeScore += value
    homePt.textContent = homeScore
  }
  else {
    guestScore += value
    guestPt.textContent = guestScore
  }
}

function resetBoard() {
  homeScore = 0
  guestScore = 0
  homePt.textContent = homeScore
  guestPt.textContent = guestScore
}

