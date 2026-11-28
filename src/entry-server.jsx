import { StrictMode } from "react";
import { Writable } from "node:stream";
import { renderToPipeableStream } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import App from "./App.jsx";

/**
 * Render route ke HTML string lengkap.
 * Menggunakan renderToPipeableStream (onAllReady) agar semua React.lazy + Suspense
 * selesai di-resolve sebelum HTML dikirim.
 *
 * @param {string} url
 * @returns {Promise<string>}
 */
export function render(url) {
  return new Promise((resolve, reject) => {
    let html = "";
    const stream = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });

    stream.on("finish", () => resolve(html));
    stream.on("error", reject);

    const { pipe } = renderToPipeableStream(
      <StrictMode>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </StrictMode>,
      {
        onAllReady() {
          pipe(stream);
        },
        onError(err) {
          reject(err);
        },
      }
    );
  });
}
