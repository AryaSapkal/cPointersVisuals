      document.addEventListener("DOMContentLoaded", () => {
        let numMemoryCells = 10;
        function createMemoryCells(count, parentMemoryBlock) {
          const memoryBlock = parentMemoryBlock;

          memoryBlock.innerHTML = ""; // Clear any existing cells

          for (let i = 0; i < count; i++) {
            // Create a cell with class memoryCell and text content of i
            const cell = document.createElement("div");
            cell.classList.add("memoryCell");
            cell.textContent = i;

            memoryBlock.appendChild(cell);
          }
        }

        function createPointer(pointerName) {
          const pointer = document.createElement("div");
          pointer.classList.add("pointerName");

          pointer.textContent = pointerName;
        }

        //function createAllMemoryCells(count) {}

        createMemoryCells(
          numMemoryCells,
          document.querySelector("#pointers-memory-block")
        );
        createMemoryCells(
          numMemoryCells,
          document.querySelector("#files-memory-block")
        );
      });