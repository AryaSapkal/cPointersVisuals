let numMemoryCells = 15;



document.addEventListener("DOMContentLoaded", () => {
  //let numMemoryCells = 10;

  function createMemoryCell(cellText){
    const memoryCell = document.createElement("div");
    memoryCell.classList.add("memory-cell");

    memoryCell.textContent = cellText;
  }

  function createMemoryAddress(addressText){
    const memoryAddress = document.createElement("div");
    memoryAddress.classList.add("memory-address");

    memoryAddress.textContent = addressText;
  }

  function createMemoryCellAddress(cellText, addressText){
    const memoryCellAddress = document.createElement("div");
    memoryCellAddress.classList.add("memory-cell-address");

    memoryCellAddress.innerHTML.add(createMemoryCell(cellText));
    memoryCellAddress.innerHTML.add(createMemoryAddress(addressText));
  }
/*
  function createMemoryCellAddresses(count, bytesBetweenEachCell){
    const memoryCellAddresses = document.createElement("div");
    memoryCellAddresses.classList.add("memory-cell-addresses");

    for(let i = 0; i < count; i++){
      
    }
  }*/

  function createMemoryBlock(count, parentMemoryBlock, bytesBetweenEachCell){
    const memoryBlock = parentMemoryBlock;
    memoryBlock.innerHTML = "";

    //const memoryCellAddresses = document.createElement("div");
    //memoryCellAddresses.classList.add("memory-cell-addresses");

    for(let i = 0; i < count; i++){
      const memoryCellAddress = createMemoryCellAddress("", i*bytesBetweenEachCell);
      memoryCellAddress.classList.add("memory-cell-address");

      //memoryCellAddresses.appendChild(memoryCellAddress);
      memoryBlock.appendChild(memoryCellAddress);
    }

    //memoryBlock.appendChild(memoryCellAddresses);

  }

  //-------------------

  function createMemoryCells(count, parentMemoryBlock, bytesBetweenEachCell) {
    const memoryBlock = parentMemoryBlock;

    memoryBlock.innerHTML = ""; // Clear any existing cells

    for (let i = 0; i < count; i++) {
      // Create a cell with class memoryCell and text content of i
      const cell = document.createElement("div");
      cell.classList.add("memory-cell");
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





  
  //const lineOfCode = processNode.querySelector(":scope > p:first-of-type"); // Look for the first paragraph that is a direct child of this div
  const processNode = document.getElementById("process-block-1");
  const lineOfCode = processNode.querySelector("#temp");
  const text = lineOfCode.firstChild;

  if(!CSS.highlights){
    lineOfCode.textContent = "The CSS custom highlight api is not supported in this browser."
  }
  
  const range = new Range();

  range.setStart(text, 0);
  range.setEnd(text, text.length);


  const highlight = new Highlight(range);

  CSS.highlights.set("highlight-1", highlight); // highlight-1 is a custom identifier of highlight that can be used in CSS




  








  createMemoryBlock(numMemoryCells, document.querySelector("#pointers-memory-block"), 1);

  /*createMemoryCells(
    numMemoryCells,
    document.querySelector("#pointers-memory-block"), 1
  );*/
  createMemoryCellsAll(
    numMemoryCells,
    document.querySelectorAll(".files-memory-block"), 4
  );

  // createMemoryCells(
  //   numMemoryCells,
  //   document.querySelector("#files-memory-block"), 1
  // );


  // next: create a createMemoryCellsAll function that inserts the same amount of memory cells in each memory block on the page
});