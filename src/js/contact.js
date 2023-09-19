let formulario = document.getElementById('container-form')

const div = document.createElement("div");
div.className = "form"

div.innerHTML =`<h5>Ponte en contacto conmigo</h5>
                <div>
                    <label for="email" class="label">Email</label>
                    <input type="email" class="form-control" id="email" required>
                </div>
                <div>
                    <label for="name" class="label">Nombre</label>
                    <input type="text" class="form-control" id="name" required>
                </div>
                <div>
                    <label for="surname" class="label">Apellido</label>
                    <input type="text" class="form-control" id="surname" required>
                </div>
                <div>
                    <label for="text" class="label">Ingrese texto</label>
                    <textarea class="form-control" id="text" rows="3"></textarea required>
                </div>
                <button type="button" class="btn btn-primary">Enviar</button>`

formulario.append(div)