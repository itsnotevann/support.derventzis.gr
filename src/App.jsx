export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800 p-6">

      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">Support Downloads</h1>
        <p className="text-lg text-gray-600">
          Choose a tool so we can assist remotely
        </p>
      </header>

      <div className="grid gap-4 w-full max-w-md">
        <a
          href="https://download.anydesk.com/AnyDesk.exe"
          className="w-full py-3 rounded-xl bg-[#ED1C24] hover:bg-[#C4171D] text-white font-semibold text-center shadow"
        >
          Download AnyDesk
        </a>

        <a
          href="https://github.com/rustdesk/rustdesk/releases/download/1.4.5/rustdesk-1.4.5-x86_64.exe"
          className="w-full py-3 rounded-xl bg-[#F15A24] hover:bg-[#D04A1E] text-white font-semibold text-center shadow"
        >
          Download RustDesk
        </a>
      </div>

      <footer className="mt-12 text-sm text-gray-500">
        © {new Date().getFullYear()} Support Downloads
      </footer>

    </div>
  );
}