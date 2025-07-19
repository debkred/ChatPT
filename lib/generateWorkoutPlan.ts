export function generateWorkoutPlan(data: Record<string, string>) {
  return `Mål: ${data.goal}. Erfarenhet: ${data.experience}. Träningsfrekvens: ${data.frequency}. Tidsram: ${data.timeframe}. Plan kommer genereras baserat på detta.`;
}
