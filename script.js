let numMemoryCells = 15;



document.addEventListener("DOMContentLoaded", () => {
  //let numMemoryCells = 10;
  function createMemoryCells(count, parentMemoryBlock, bytesBetweenEachCell) {
    const memoryBlock = parentMemoryBlock;

    memoryBlock.innerHTML = ""; // Clear any existing cells

    for (let i = 0; i < count; i++) {
      // Create a cell with class memoryCell and text content of i
      const cell = document.createElement("div");
      cell.classList.add("memoryCell");
      cell.textContent = i*(bytesBetweenEachCell); // Cells can have a varying number of bytes (and corresponding addresses increase amounts) for changeable visual simplicity/complexity

      memoryBlock.appendChild(cell);
    }
  }


  // Allow to input memory cells to multiple memory blocks of the same class
  function createMemoryCellsAll(count, parentMemoryBlockClass, bytesBetweenEachCell){
    const memoryBlockList = parentMemoryBlockClass;
    memoryBlockList.innerHTML = "";

    memoryBlockList.forEach(memoryBlock => {

      createMemoryCells(count, memoryBlock, bytesBetweenEachCell);
      
    })
  }

  function createPointer(pointerName) {
    const pointer = document.createElement("div");
    pointer.classList.add("pointerName");

    pointer.textContent = pointerName;
  }


  createMemoryCells(
    numMemoryCells,
    document.querySelector("#pointers-memory-block"), 1
  );
  createMemoryCellsAll(
    numMemoryCells,
    document.querySelectorAll(".files-memory-block"), 1
  );

  // createMemoryCells(
  //   numMemoryCells,
  //   document.querySelector("#files-memory-block"), 1
  // );


  // next: create a createMemoryCellsAll function that inserts the same amount of memory cells in each memory block on the page
});