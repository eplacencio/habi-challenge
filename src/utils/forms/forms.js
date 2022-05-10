export default [
  {
    _id: 1,
    path: '/data-client',
    order: 1,
    description: 'Ingresa el nombre y apellido del propietario del apartamento',
    toSend: 'first_step',
    inputs: [
      {
        name: 'full_name',
        value: '',
        required: true,
        label: 'Nombre y apellido',
        type: 'text',
        regex: /^([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{5,})$/,
        error: 'Nombres y apellidos inválidos, ingrese solo letras.',
        showError: false
      }
    ]
  },
  {
    _id: 2,
    path: '/data-email',
    order: 2,
    description: 'Ingresa el correo eletrónico',
    toSend: 'second_step',
    inputs: [
      {
        name: 'email',
        value: '',
        required: true,
        label: 'Correo electrónico',
        type: 'email',
        regex: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
        error: 'Correo electrónico inválido',
        showError: false
      }
    ]
  },
  {
    _id: 3,
    path: '/data-direction',
    order: 3,
    description: 'Ingresa la dirección del apartamento',
    toSend: 'third_step',
    inputs: [
      {
        name: 'direction',
        value: '',
        required: true,
        label: 'Dirección de apartamento',
        type: 'text',
        regex: /^([a-zA-Z0-9ñÑáéíóúÁÉÍÓÚüÜ #,.-]{5,})$/,
        error: 'Dirección inválida',
        showError: false
      }
    ]
  },
  {
    _id: 4,
    path: '/data-floor',
    order: 4,
    description:
      'Selecciona el número de piso donde se encuentra el apartamento',
    toSend: 'four_step',
    inputs: [
      {
        name: 'step',
        value: '',
        required: true,
        label: 'Número de piso',
        type: 'select',
        regex: /^([0-9]{1,2})$/,
        error: 'Debe seleccionar un número de piso.',
        showError: false,
        options: Array.from({ length: 50 }, (_, i) => i + 1)
      }
    ]
  },
  {
    _id: 5,
    path: '/data-areas',
    order: 5,
    description:
      'Selecciona si el apartamento tiene alguna de las siguientes opciones',
    toSend: 'five_step',
    inputs: [
      {
        name: 'area-bbq',
        value: false,
        required: false,
        label: 'Zona BBQ',
        type: 'checkbox'
      },
      {
        name: 'area-common',
        value: false,
        required: false,
        label: 'Salón comunal',
        type: 'checkbox'
      },
      {
        name: 'area-park',
        value: false,
        required: false,
        label: 'Parque de juegos',
        type: 'checkbox'
      }
    ]
  },
  {
    _id: 6,
    path: '/data-parking',
    order: 6,
    description: '¿El inmueble tiene parqueadero?',
    toSend: 'six_step',
    inputs: [
      {
        name: 'parking',
        value: '',
        required: true,
        label: 'Tiene parqueadero',
        type: 'select',
        regex: /^([a-zA-Z]{2})$/,
        error: 'Debe seleccionar una opción.',
        showError: false,
        options: ['Si', 'No']
      },
      {
        name: 'parking-cover',
        value: '',
        required: true,
        label: '¿El parqueadero es cubierto?',
        type: 'select',
        regex: /^([a-zA-Z]{2})$/,
        error: 'Debe seleccionar una opción.',
        showError: false,
        options: ['Si', 'No'],
        depend: 'parking'
      }
    ]
  },
  {
    _id: 7,
    path: '/data-sales-amount',
    order: 7,
    description: 'Monto por el que vende el apartamento',
    toSend: 'seven_step',
    inputs: [
      {
        name: 'sales-amount',
        value: '',
        required: true,
        label: 'Monto',
        type: 'text',
        regex: /^([0-9]{3,})$/,
        error: 'Monto inválido',
        showError: false
      }
    ]
  },
  {
    _id: 8,
    path: '/data-upload-photo',
    order: 8,
    description: 'Sube una foto de tu inmueble',
    toSend: 'eight_step',
    inputs: [
      {
        name: 'photo',
        value: '',
        required: false,
        label: 'Foto del inmueble',
        type: 'file',
        regex: ['image/jpeg', 'image/jpg', 'image/png'],
        error: 'Foto inválida',
        showError: false
      }
    ]
  },
  {
    _id: 9,
    path: '/data-has-elevator',
    order: 9,
    description: '¿El apartamento tiene ascensor?',
    toSend: 'nine_step',
    inputs: [
      {
        name: 'has-elevator',
        value: '',
        required: true,
        label: 'Seleccione si tiene ascensor',
        type: 'select',
        regex: /^([a-zA-ZñÑáéíóúÁÉÍÓÚüÜ ]{3,})$/,
        error: 'Debe seleccionar una opción inválida',
        showError: false,
        options: ['Si', 'No']
      }
    ]
  },
  {
    _id: 10,
    path: '/data-resume',
    order: 10,
    description: 'Ten step Resume',
    toSend: 'ten_step'
  }
];
