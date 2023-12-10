const mongoose = require("mongoose");

// Collections de registro de operaciones aduanera
const ResgistroOoperacionASchema = new mongoose.Schema(
  {
    codigoOperacion: {
      type: String,
      default: mongoose.Types.ObjectId,
      unique: true
    },
    tipo: {
      type: String,
    },
    estado: {
      type: Boolean,
    },
    nitAgenteAduana: {
      type: String,
      default: mongoose.Schema.Types.ObjectId,
      ref: "Aduanero",
    },
    codigoTraslado: {
      type: String,
      default: mongoose.Schema.Types.ObjectId,
      ref: "Traslado",
    },
    partidaId: {
      type: String,
      default: mongoose.Schema.Types.ObjectId,
      ref: "Producto",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

ResgistroOoperacionASchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret._id = ret.codigoOperacion;
    delete ret.codigoOperacion;
    delete ret.__v;
    }
})

// Collections de registro de agente de aduana
const RegistroAgenteASchama = new mongoose.Schema(
  {
    nitAgenteAduana: {
      type: String,
      default: mongoose.Types.ObjectId,
      unique: true
    },
    nombre: {
      type: String,
    },
    apellido: {
      type: String,
    },
    Pais: {
      type: String,
    },
    direccion: {
      type : String
    },
    telefono: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

RegistroAgenteASchama.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret._id = ret.nitAgenteAduana;
    delete ret.nitAgenteAduana;
    delete ret.__v;
    }
})

// Collections de registro de producto
const ProductoSchama = new mongoose.Schema(
  {
    partidaId: {
      type: String,
      default: mongoose.Types.ObjectId,
      unique: true
    }, 
    nombre: {
      type: String,
    },
    unidadFisica: {
      type: Number,
    },
    tarifaAdvalorem: {
      type: Number,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

ProductoSchama.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret._id = ret.partidaId;
    delete ret.partidaId;
    delete ret.__v;
    }
})

// Collections de registro de traslado
const TrasladoSchama = new mongoose.Schema(
  {
    codigoTraslado: {
      type: String,
      default: mongoose.Types.ObjectId,
      unique: true
    },
    tipoAlmacen: {
      type: String,
    },
    naviera: {
      type: String,
    },
    codigoRuta: {
      type: String,
      default: mongoose.Schema.Types.ObjectId,
      ref: "Viaje",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

TrasladoSchama.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret._id = ret.codigoTraslado;
    delete ret.codigoTraslado;
    delete ret.__v;
    }
})


// Collections de registro de reporte 
const ReporteSchema = new mongoose.Schema(
  {
    nReportes: {
      type: String,
      default: mongoose.Types.ObjectId,
      unique: true
    },
    rifEmpresa: {
      type: String,
      default: mongoose.Schema.Types.ObjectId,
      ref: "Empresa",
    },
    fechaEmision: {
      type: String,
    },
    codigoOperacion: {
      type: String,
      default: mongoose.Schema.Types.ObjectId,
      ref: "Operacion",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

ReporteSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret._id = ret.nReportes;
    delete ret.nReportes;
    delete ret.__v;
    }
})

// Collections de registro de empresa
const EmpresaSchema = new mongoose.Schema(
  {
    rifEmpresa: {
      type: String,
      default: mongoose.Types.ObjectId,
      unique: true
    },
    nombreEmpresa: {
      type: String,
    },
    paisEmpresa: {
      type: String,
    },
    telefonoEmpresa: {
      type: String,
    },
    fechaEmision: {
      type: String,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

EmpresaSchema.set('toJSON', {
  virtuals: true,
  transform: (doc, ret) => {
    ret._id = ret.rifEmpresa;
    delete ret.rifEmpresa;
    delete ret.__v;
    }
})

// Collections de registro de itinerario de viaje
const ViajeSchema = new mongoose.Schema(
    {
      codigoRuta: {
        type: String,
        default: mongoose.Types.ObjectId,
        unique: true
      },
      paisOrigen: {
        type: String,
      },
      paisDestino: {
        type: String,
      },
      puertoEntrada: {
        type: String,
      },
      fechaSalida: {
        type: String,
      },
      fechaIngreso: {
        type: String,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );

  ViajeSchema.set('toJSON', {
    virtuals: true,
    transform: (doc, ret) => {
      ret._id = ret.codigoRuta;
      delete ret.codigoRuta;
      delete ret.__v;
      }
  })

const operaciones = mongoose.model("Operaciones", ResgistroOoperacionASchema);
const aduaneros = mongoose.model("Aduaneros", RegistroAgenteASchama);
const productos = mongoose.model("Productos", ProductoSchama);
const traslados = mongoose.model("Traslados", TrasladoSchama);
const reportes = mongoose.model("Reportes", ReporteSchema);
const empresas = mongoose.model("Empresas", EmpresaSchema);
const viajes = mongoose.model("Viajes", ViajeSchema);

module.exports = {
  operaciones,
  aduaneros,
  productos,
  traslados,
  reportes,
  empresas,
  viajes
};
