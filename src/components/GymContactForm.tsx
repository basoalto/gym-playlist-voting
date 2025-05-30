import { useActionState } from "react";

interface GymContactFormState {
  name: string;
  email: string;
  phone: string;
  message: string;
  submitted: boolean;
  error: string;
}

const initialState: GymContactFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  submitted: false,
  error: "",
};

function GymContactForm({ onClose }: { onClose: () => void }) {
  const [state, formAction] = useActionState(
    (prev: GymContactFormState, formData: FormData): GymContactFormState => {
      const name = formData.get("name") as string;
      const email = formData.get("email") as string;
      const phone = formData.get("phone") as string;
      const message = formData.get("message") as string;
      if (!name || !email || !phone) {
        return { ...prev, error: "Todos los campos son obligatorios.", submitted: false };
      }
      // Aquí podrías enviar los datos a un backend o API
      return { ...prev, name, email, phone, message, submitted: true, error: "" };
    },
    initialState
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fade-in">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative border-2 border-amber-300">
        <button onClick={onClose} className="absolute top-4 right-4 text-2xl text-amber-500 hover:text-amber-700 font-bold focus:outline-none">×</button>
        <h2 className="text-2xl font-bold text-amber-700 mb-6 text-center">Contacto para Gimnasios</h2>
        {state.submitted ? (
          <div className="text-center text-green-600 font-semibold">
            ¡Gracias por enviar tus datos! Nos pondremos en contacto pronto.
            <button className="block mx-auto mt-6 px-4 py-2 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-lg shadow" onClick={onClose}>Cerrar</button>
          </div>
        ) : (
          <form action={formAction} className="space-y-4">
            <div>
              <label className="block text-amber-700 font-semibold mb-1">Nombre del gimnasio</label>
              <input name="name" type="text" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" defaultValue={state.name} />
            </div>
            <div>
              <label className="block text-amber-700 font-semibold mb-1">Email</label>
              <input name="email" type="email" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" defaultValue={state.email} />
            </div>
            <div>
              <label className="block text-amber-700 font-semibold mb-1">Teléfono</label>
              <input name="phone" type="tel" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" defaultValue={state.phone} />
            </div>
            <div>
              <label className="block text-amber-700 font-semibold mb-1">Mensaje</label>
              <textarea name="message" className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400" rows={3} defaultValue={state.message}></textarea>
            </div>
            {state.error && <div className="text-red-500 text-sm">{state.error}</div>}
            <button type="submit" className="w-full px-4 py-2 bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-lg shadow">Enviar</button>
          </form>
        )}
      </div>
    </div>
  );
}

export default GymContactForm;
