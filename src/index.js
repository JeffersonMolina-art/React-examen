import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main>
      <div className='formulario'>
          <input type="text" placeholder='Nombre'/> 
          <input type="text" placeholder='Apellido'/> 
          <input type='email' placeholder='@Correo' />
          <input type='tel' placeholder='Numero' />
          <label>Tipo participacion:
            <select>
              <option value="asistente">Asistente</option>
              <option value="expositor">Expositor</option>
              <option value="voluntario">Voluntario</option>
            </select>
          </label>
          <textarea placeholder='Comentario o pregunta' rows="4" cols="50"></textarea>
          <label>
              Asistencia:
              <input type='checkbox' name='Asistencia'  value="Asistencia"/>
          </label>
          
          <input type='submit'  />
      </div>
  </main>
);

reportWebVitals();
