import React, { createContext, useContext, useReducer } from "react";

// Estado inicial
const initialState = {
  lives: 3,
  xp: 0,
  completedModules: [],
};

// Actions
const ADD_XP = "ADD_XP";
const LOSE_LIFE = "LOSE_LIFE";
const COMPLETE_MOD = "COMPLETE_MOD";
const RESET_GAME = "RESET_GAME";

// Reducer
function gameReducer(state, action) {
  switch (action.type) {
    case ADD_XP:
      return { ...state, xp: state.xp + action.payload };
    case LOSE_LIFE:
      return { ...state, lives: Math.max(0, state.lives - 1) };
    case COMPLETE_MOD:
      return {
        ...state,
        completedModules: [...state.completedModules, action.payload],
      };
    case RESET_GAME:
      return { ...initialState };
    default:
      return state;
  }
}

// Context & Provider
const GameContext = createContext();
export function GameProvider({ children }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const addXp = (amount) => dispatch({ type: ADD_XP, payload: amount });
  const loseLife = () => dispatch({ type: LOSE_LIFE });
  const completeMod = (id) => dispatch({ type: COMPLETE_MOD, payload: id });
  const resetGame = () => dispatch({ type: RESET_GAME });

  return (
    <GameContext.Provider
      value={{
        ...state,
        addXp,
        loseLife,
        completeMod,
        resetGame,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

// Hook de consumo
export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be inside GameProvider");
  return ctx;
}
