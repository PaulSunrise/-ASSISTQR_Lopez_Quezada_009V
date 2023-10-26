export interface RespuestaToHeadLines{
    status: string;
    data: Data[];
}

export interface Data {
    date: string;
    title: string; 
    type: string;
    inalienable: number;
    extra: string;
  }


export interface Users{
    id: number,
    username: String;
    password:String;
}

export interface Usuarios{
    id: number,
    username: string,
    password: string,
    nombre: string,
    email: string,
    rut: string,
    asignatura1: string,
    semestre1: string,
    anio_asig1: string,
    horas_asig1: string,
    asignatura2: string,
    semestre2: string,
    anio_asig2: string,
    horas_asig2: string,
    isactive: boolean;
}




export interface Usuario{
    username: string,
    password: string,
    nombre: string,
    email: string,
    rut: string,
    asignatura1: string,
    semestre1: string,
    anio_asig1: string,
    horas_asig1: string,
    asignatura2: string,
    semestre2: string,
    anio_asig2: string,
    horas_asig2: string,
    isactive: boolean;
}


