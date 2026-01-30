let isHindi = false;

function toggleLanguage() {
  isHindi = !isHindi;
  document.getElementById("title").innerText =
    isHindi ? "लागू कानून खोजें" : "Find Applicable Laws";
}

function findLaw() {
  let input = document.getElementById("userInput").value.toLowerCase();
  let result = document.getElementById("result");

  if (input.includes("rape")) {
    result.innerHTML = `
    <details>
      <summary>IPC Section 376 – Rape</summary>
      <p>Rape is non-consensual sexual intercourse. Punishable with imprisonment.</p>
    </details>`;
  }

  else if (input.includes("murder")) {
    result.innerHTML = `
    <details>
      <summary>IPC Section 302 – Murder</summary>
      <p>Murder is the intentional killing of a person.</p>
    </details>`;
  }

  else if (input.includes("theft")) {
    result.innerHTML = `
    <details>
      <summary>IPC Section 378 – Theft</summary>
      <p>Dishonest removal of movable property.</p>
    </details>`;
  }

  else if (input.includes("cyber")) {
    result.innerHTML = `
    <details>
      <summary>IT Act 2000 – Cyber Crime</summary>
      <p>Crimes related to computers and internet.</p>
    </details>`;
  }

  else {
    result.innerHTML = "No matching law found.";
  }
}
