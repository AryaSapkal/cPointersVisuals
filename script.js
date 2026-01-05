let numMemoryCells = 15;



document.addEventListener("DOMContentLoaded", () => {
  //let numMemoryCells = 10;
/*
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

  // function createMemoryCellAddresses(count, bytesBetweenEachCell){
  //   const memoryCellAddresses = document.createElement("div");
  //   memoryCellAddresses.classList.add("memory-cell-addresses");

  //   for(let i = 0; i < count; i++){
      
  //   }
  //}

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


*/


  
  

  // Dynamically create ranges for all of the paragraphs in the process-block
  let processBlock = document.getElementById("process-block-1");
  let processBlockChildElements = processBlock.querySelectorAll("p");



  function incrementHighlightedLine(childElements, index){

    if(index < childElements.length){
      //const childElementsList = processBlock.querySelectorAll("p");
      const element = childElements.item(index);
      const textNode = element.firstChild;
      //const textNode = element[0];

      if(textNode !== null){
        const range = document.createRange();
        range.setStart(textNode, 0);
        range.setEnd(textNode, textNode.length);

        const highlight = new Highlight(range);
        CSS.highlights.set("highlight-1", highlight);

        
        setTimeout(() => {
          CSS.highlights.delete("highlight-1");
        }, 500);

        // Recursively call the highlight function for the next text node for precise and flexible control for showing processes
        setTimeout(() => {
          incrementHighlightedLine(childElements, index+1);
        }, 500);
        
      }
      else{
        incrementHighlightedLine(childElements, index+1);
      }
      
    }

  }


  incrementHighlightedLine(processBlockChildElements, 0);

  if(!CSS.highlights){
    lineOfCode.textContent = "The CSS custom highlight api is not supported in this browser."
  }
  
  
});