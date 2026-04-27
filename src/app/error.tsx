"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="container section text-center">
      <h2 className="mb-4">Algo salió mal</h2>
      <p className="mb-4">Ha ocurrido un error inesperado.</p>
      <button
        onClick={() => reset()}
        className="btn"
      >
        Intentar de nuevo
      </button>
    </div>
  );
}
