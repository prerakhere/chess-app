export function getNumericPosition(position: string): [number, number] {
  const columnIndex = position[0].toUpperCase().charCodeAt(0) - "A".charCodeAt(0);
  const rowIndex = parseInt(position[1], 10) - 1;

  return [rowIndex, columnIndex];
}

export function getChessNotation(rowIndex: number, columnIndex: number): string {
  const columnLetter = String.fromCharCode("A".charCodeAt(0) + columnIndex);
  const rowNumber = (rowIndex + 1).toString();

  return `${columnLetter}${rowNumber}`;
}

