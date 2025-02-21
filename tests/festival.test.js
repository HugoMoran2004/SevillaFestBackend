const request = require("supertest");
const app = require("../index");

describe("📝 Pruebas sobre la API de festivales", () => {
  let festivalId = null;

  test("✅ Crear un nuevo festival", async () => {
    const festivalData = {
      nombre: "Festival de Música",
      ciudad: "Sevilla",
      numEntradas: 10000,
      precio: 150.00,
      fechaInicio: "2025-07-01", // Corregido: Añadir fechaInicio
      fechaFin: "2025-07-05" // Corregido: Añadir fechaFin
    };

    const res = await request(app)
      .post("/api/festival")
      .send(festivalData);

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("datos"); // Corregido: Esperar "datos"
    expect(res.body.datos).toHaveProperty("idFestival");
    festivalId = res.body.datos.idFestival;
  });

  test("📌 Obtener todos los festivales", async () => {
    const res = await request(app).get("/api/festival");

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("datos"); // Corregido: Esperar "datos"
    expect(Array.isArray(res.body.datos)).toBe(true);
  });

  test("🔍 Obtener festival por ID", async () => {
    if (!festivalId) {
      console.warn("⚠️ El ID del festival no se ha definido. Se omite la prueba.");
      return;
    }

    const res = await request(app).get(`/api/festival/${festivalId}`);

    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("datos"); // Corregido: Esperar "datos"
    expect(res.body.datos).toHaveProperty("idFestival", festivalId);
  });


  test("✏️ Actualizar un festival", async () => {
    if (!festivalId) {
      console.warn("⚠️ El ID del festival no se ha definido. Se omite la prueba.");
      return;
    }

    const updatedFestival = {
      idFestival: festivalId,
      nombre: "Festival Modificado",
      ciudad: "Granada",
      numEntradas: 8000,
      precio: 120.00,
      fechaInicio: "2025-07-02", // Corregido: Incluir fechas
      fechaFin: "2025-07-06"
    };

    const res = await request(app)
      .put(`/api/festival/${festivalId}`)
      .send(updatedFestival);

    expect([200, 204]).toContain(res.statusCode);
  });

  test("🗑️ Eliminar un festival", async () => {
    if (!festivalId) {
      console.warn("⚠️ El ID del festival no se ha definido. Se omite la prueba.");
      return;
    }

    const res = await request(app).delete(`/api/festival/${festivalId}`);

    expect([200, 204]).toContain(res.statusCode);
  });

  test("❌ Obtener festival eliminado (debe fallar)", async () => {
    if (!festivalId) {
      console.warn("⚠️ El ID del festival no se ha definido. Se omite la prueba.");
      return;
    }

    const res = await request(app).get(`/api/festival/${festivalId}`);

    expect(res.statusCode).toBe(404);
  });
});
