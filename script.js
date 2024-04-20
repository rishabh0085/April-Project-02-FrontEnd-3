function convert(numRows, s) {
  if (numRows === 1) return s; // No zigzag pattern for one row
  
  const rows = [];
  for (let i = 0; i < Math.min(numRows, s.length); i++) {
    rows[i] = ""; // Initialize each row
  }
  
  let currentRow = 0;
  let goingDown = false; // Flag to indicate whether we're moving down or up in the zigzag
  
  for (const char of s) {
    rows[currentRow] += char; // Add current character to the current row
    
    // If we've reached the top or bottom row, change direction
    if (currentRow === 0 || currentRow === numRows - 1) {
      goingDown = !goingDown;
    }
    
    // Move to the next row
    currentRow += goingDown ? 1 : -1;
  }
  
  // Concatenate all rows to form the zigzag pattern
  return rows.join("");
}
