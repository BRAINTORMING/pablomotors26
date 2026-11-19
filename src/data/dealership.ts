export type VehicleStatus = 'disponible' | 'por llegar' | 'vendido';

export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  year: number;
  body: string;
  km: string;
  transmission: string;
  fuel: string;
  engine: string;
  price: string;
  status: VehicleStatus;
  featured?: boolean;
}

export const vehicleBodies = ['Ver todos', 'Sedán', 'SUV', 'Camioneta', 'Minivan', 'Pickup'];

export const vehicles: Vehicle[] = [
  { id: 1, brand: 'KIA', model: 'Sorento', year: 2021, body: 'SUV', km: '45.000 km', transmission: 'Automático', fuel: 'Diésel', engine: '2.2 CRDi', price: '$17.500.000', status: 'disponible', featured: true },
  { id: 2, brand: 'Chevrolet', model: 'Spark', year: 2016, body: 'Sedán', km: '62.000 km', transmission: 'Manual', fuel: 'Bencina', engine: '1.2 LS', price: '$4.900.000', status: 'disponible' },
  { id: 3, brand: 'KIA', model: 'Sportage 4x4', year: 2018, body: 'SUV', km: '88.000 km', transmission: 'Automático', fuel: 'Diésel', engine: '2.0 CRDi', price: '$8.100.000', status: 'disponible' },
  { id: 4, brand: 'KIA', model: 'Carnival', year: 2019, body: 'Minivan', km: '70.000 km', transmission: 'Automático', fuel: 'Diésel', engine: '2.2 CRDi', price: '$18.500.000', status: 'disponible' },
  { id: 5, brand: 'KIA', model: 'Gran Carnival', year: 2022, body: 'Minivan', km: '31.000 km', transmission: 'Automático', fuel: 'Diésel', engine: '2.2 CRDi', price: '$17.000.000', status: 'por llegar' },
  { id: 6, brand: 'Hyundai', model: 'Tucson', year: 2020, body: 'SUV', km: '52.000 km', transmission: 'Automático', fuel: 'Bencina', engine: '2.0 GLS', price: '$7.000.000', status: 'disponible' },
  { id: 7, brand: 'KIA', model: 'Sportage', year: 2016, body: 'SUV', km: '99.000 km', transmission: 'Automático', fuel: 'Bencina', engine: '2.0', price: '$6.000.000', status: 'disponible' },
  { id: 8, brand: 'KIA', model: 'Sorento', year: 2015, body: 'SUV', km: '120.000 km', transmission: 'Automático', fuel: 'Diésel', engine: '2.2 CRDi', price: '$13.000.000', status: 'por llegar' },
  { id: 9, brand: 'Hyundai', model: 'Tucson', year: 2019, body: 'SUV', km: '64.000 km', transmission: 'Automático', fuel: 'Bencina', engine: '2.0', price: '$5.500.000', status: 'vendido' },
  { id: 10, brand: 'Hyundai', model: 'Santa Fe DM', year: 2014, body: 'SUV', km: '130.000 km', transmission: 'Automático', fuel: 'Diésel', engine: '2.2 CRDi', price: '$10.500.000', status: 'disponible' },
  { id: 11, brand: 'KIA', model: 'Sportage', year: 2017, body: 'SUV', km: '76.000 km', transmission: 'Automático', fuel: 'Diésel', engine: '2.0 CRDi', price: '$9.000.000', status: 'disponible' },
  { id: 12, brand: 'Hyundai', model: 'Tucson', year: 2018, body: 'SUV', km: '81.000 km', transmission: 'Automático', fuel: 'Bencina', engine: '2.0', price: '$8.500.000', status: 'disponible' },
  { id: 13, brand: 'Hyundai', model: 'Santa Fe', year: 2013, body: 'SUV', km: '142.000 km', transmission: 'Automático', fuel: 'Diésel', engine: '2.2', price: '$13.000.000', status: 'por llegar' },
  { id: 14, brand: 'KIA', model: 'Sportage', year: 2019, body: 'SUV', km: '58.000 km', transmission: 'Automático', fuel: 'Diésel', engine: '2.0 CRDi', price: '$14.500.000', status: 'disponible' },
  { id: 15, brand: 'KIA', model: 'Sportage', year: 2015, body: 'SUV', km: '110.000 km', transmission: 'Manual', fuel: 'Diésel', engine: '2.0 CRDi', price: '$8.100.000', status: 'vendido' },
];

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Vehículos', href: '#catalogo' },
  { label: 'Accesorios', href: '#catalogo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Información', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
];

export const heroFilters = [
  { label: 'Marca', options: ['Marca', 'KIA', 'Hyundai', 'Chevrolet'] },
  { label: 'Año', options: ['Año', '2022', '2021', '2020', '2019'] },
  { label: 'Precio', options: ['Precio', 'Hasta $8.000.000', 'Hasta $15.000.000', 'Sobre $15.000.000'] },
  { label: 'Categoría', options: ['Categoría', 'Automático', 'Manual', 'Diésel', 'Bencina'] },
];

export const stats = [
  { value: '+200', label: 'Vehículos en stock' },
  { value: '+100', label: 'Clientes atendidos' },
  { value: '29 días', label: 'Para cambiar tu auto' },
  { value: '24 h', label: 'Respuesta a consultas' },
  { value: 'Ley 20.422', label: 'Inclusión y accesibilidad' },
];

export const brands = ['BMW', 'Mercedes-Benz', 'KIA', 'Hyundai', 'Chevrolet', 'Toyota'];

export const testimonials = [
  { title: 'Son gran empresa', quote: 'Compré mi KIA Sorento sin salir de Iquique. Me explicaron cada paso del financiamiento y el auto llegó en la fecha que me dijeron.', name: 'Miguel Á. C.' },
  { title: 'Atención impecable', quote: 'Desde la primera llamada me trataron con paciencia. Revisaron el historial del auto y me mostraron cada detalle antes de firmar.', name: 'Carolina R.' },
  { title: 'Agradecido por todo', quote: 'Fuimos con mi hijo a buscar una minivan familiar. Salimos con el auto, los papeles listos y una garantía clara por escrito.', name: 'Patricio M.' },
  { title: 'Muy recomendable', quote: 'Importaron un vehículo desde Corea con todo el trámite incluido. Transparencia de principio a fin.', name: 'Andrea L.' },
];

export const benefits = [
  { title: 'Envío a todo Chile', text: 'Entregamos en todas las regiones del país.' },
  { title: 'Horario de atención', text: 'Lunes a viernes de 9:00 a 19:00. Sábado de 10:00 a 14:00.' },
  { title: 'Transparencia', text: 'Informe mecánico e historial de cada vehículo.' },
  { title: 'Compra segura', text: 'Contrato notarial y garantía por escrito.' },
];

export const contact = {
  whatsapp: '56983883844',
  phones: ['+56 9 8388 3844'],
  email: 'contacto@transportesayk.cl',
  address: 'Los Algarrobos 3952, Iquique',
  hours: 'Lunes a viernes de 9:00 a 19:00 · Sábado de 10:00 a 14:00',
};

export const footer = {
  about: 'Venta de vehículos importados y usados en Iquique, con garantía, financiamiento y entrega en todo Chile.',
  columns: [
    { title: 'Vehículos', links: ['SUV', 'Sedanes', 'Camionetas', 'Minivans', 'Pickups'] },
    { title: 'Empresa', links: ['Sobre nosotros', 'Trabaja con nosotros', 'Preguntas frecuentes', 'Contacto'] },
    { title: 'Servicios', links: ['Financiamiento', 'Tasación de tu vehículo', 'Garantía', 'Postventa'] },
  ],
};