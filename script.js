function createMenu(parentElement, menuText) {
    const dropdownContainer = document.createElement("div");
    dropdownContainer.classList.add("dropdown-container");
    dropdownContainer.setAttribute("id", menuText);

    const dropBtn = document.createElement("button");
    dropBtn.classList.add("dropbtn");
    dropBtn.textContent = menuText;

    const dropdownItems = document.createElement("div");
    dropdownItems.classList.add("dropdown-items");

    dropdownContainer.append(dropBtn, dropdownItems);
    parentElement.append(dropdownContainer);
}

function addMenuItem(parentMenuID, itemText, itemLink) {
    const parentMenu = document.querySelector(`#${parentMenuID}`);

    if (!parentMenu) {
        console.error(`Parent menu with ID ${parentMenuID} not found.`);
        return;
    }

    const dropdownItems = parentMenu.querySelector(".dropdown-items");

    const newLink = document.createElement("a");
    newLink.textContent = itemText;
    newLink.setAttribute("href", itemLink);

    dropdownItems.appendChild(newLink);
}

export {
    createMenu,
    addMenuItem
};