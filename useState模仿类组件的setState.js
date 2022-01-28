import { useState, useRef, useEffect } from "react";

function useMyState(initialState) {
  const [state, setState] = useState(initialState);
}
