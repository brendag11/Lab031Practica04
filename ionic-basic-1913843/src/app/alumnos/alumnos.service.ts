import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from './alumno.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AlumnosService {

  private alumnos: Alumno[] = 
  [
      
    {
      id: '1',
      nombre: 'BRENDA MARIANA GOMEZ DELGADO',
      edad: '19',
      matricula: '1913843',
      correo: 'bgomez@gmail.com'
    },
    {id: '2',
    nombre: 'BEATRIZ DELGADO SOTO',
    edad: '49',
    matricula: '1807197',
    correo: 'bsoto@gmail.com'
    },
    {id: '3',
    nombre: 'ANTONIO GARCIA GOMEZ',
    edad: '59',
    matricula: '0302197',
    correo: 'agarcia@gmail.com'
    }
  ];
  constructor(private http: HttpClient) { }

  getAlumnos(){
    return [...this.alumnos];
  }

  getAlumno(idAlumno: string){
    return {...this.alumnos.find((alumno: Alumno)=>{
      return alumno.id === idAlumno
    })};
  }

  agregarAlumno(nombre: string,
    edad: string,
    matricula: string,
    correo: string){
      this.alumnos.push(
        {
        nombre, 
        edad,
        matricula,
        correo,
        id: this.alumnos.length+1 +''
      }
      );
    }

    borrarAlumno(idAlumno : string){
      this.alumnos = this.alumnos.filter((alumno: Alumno)=>{
        return alumno.id !=idAlumno
      });
    }
    
    getPersonajes() :Observable<any>{
      return this.http.get<any>(`http://swapi.dev/api/people/`,{});
    }
    
    getPersonaje(idPersonaje:string): Observable<any>{
      return this.http.get<any>(`http://swapi.dev/api/people/${idPersonaje}`,{});
    }

}