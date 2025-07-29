document.addEventListener('DOMContentLoaded', function() {
    // Navegación móvil
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links li');
    
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });
    
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });
    
    // Cambiar navbar al hacer scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });
    
    // Filtrado de posts por categoría
    const categoryBtns = document.querySelectorAll('.category-btn');
    const blogPosts = document.querySelectorAll('.blog-post');
    
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remover active de todos los botones
            categoryBtns.forEach(button => button.classList.remove('active'));
            // Agregar active al botón clickeado
            btn.classList.add('active');
            
            const category = btn.getAttribute('data-category');
            
            // Filtrar posts
            blogPosts.forEach(post => {
                const postCategory = post.getAttribute('data-category');
                
                if (category === 'all' || postCategory === category) {
                    post.style.display = 'block';
                } else {
                    post.style.display = 'none';
                }
            });
        });
    });
    
    // Sistema de posts detallados
    const readMoreBtns = document.querySelectorAll('.read-more');
    const blogSection = document.querySelector('.blog-section');
    const postDetailSection = document.querySelector('.post-detail-section');
    const backToBlogBtn = document.getElementById('back-to-blog');
    const fullPostContent = document.querySelector('.full-post');
    
    const postsData = {
        recurrencia: {
            title: 'Recurrencia y Árboles Binarios',
            date: '15/06/2025',
            content: `
                <h2>Recurrencia y Árboles Binarios</h2>
                <div class="post-meta">
                    <span class="post-date">Publicado: 15/06/2025</span>
                    <span class="post-category">Recurrencia y Árboles</span>
                </div>
                <div class="post-content">
                    <img src="https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Árboles binarios">
                    
                    <p>Los árboles binarios son estructuras de datos fundamentales en computación que consisten en nodos conectados donde cada nodo tiene como máximo dos hijos (izquierdo y derecho).</p>
                    
                    <h3>Relaciones de Recurrencia</h3>
                    <p>Las relaciones de recurrencia son ecuaciones que definen una secuencia basada en casos base y una regla recursiva. En el contexto de árboles binarios, estas relaciones nos ayudan a analizar la complejidad de algoritmos como recorridos y búsquedas.</p>
                    
                    <p>La relación de recurrencia para un árbol binario completo es:</p>
                    
                    <pre><code>T(n) = 2T(n/2) + O(1)</code></pre>
                    
                    <p>Donde:</p>
                    <ul>
                        <li><strong>T(n)</strong>: Tiempo de ejecución para un árbol de tamaño n</li>
                        <li><strong>2T(n/2)</strong>: Dos llamadas recursivas para los subárboles izquierdo y derecho</li>
                        <li><strong>O(1)</strong>: Tiempo constante para procesar el nodo actual</li>
                    </ul>
                    
                    <h3>Aplicaciones Prácticas</h3>
                    <p>Los árboles binarios tienen múltiples aplicaciones:</p>
                    <ul>
                        <li>Árboles de búsqueda binaria (BST)</li>
                        <li>Montículos (Heaps) para implementar colas de prioridad</li>
                        <li>Árboles de expresión para evaluar expresiones matemáticas</li>
                        <li>Árboles de decisión en machine learning</li>
                    </ul>
                </div>
            `
        },
        fundamentos: {
            title: 'Fundamentos de Programación',
            date: '10/06/2025',
            content: `
                <h2>Fundamentos de Programación</h2>
                <div class="post-meta">
                    <span class="post-date">Publicado: 10/06/2025</span>
                    <span class="post-category">Fundamentos</span>
                </div>
                <div class="post-content">
                    <img src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Fundamentos de programación">
                    
                    <p>Los conceptos básicos son esenciales para cualquier programador, independientemente del lenguaje o tecnología que utilice.</p>
                    
                    <h3>Variables y Tipos de Datos</h3>
                    <p>Las variables son contenedores para almacenar datos. Los tipos fundamentales incluyen:</p>
                    <ul>
                        <li><strong>Enteros:</strong> Números sin decimales (int, long)</li>
                        <li><strong>Flotantes:</strong> Números con decimales (float, double)</li>
                        <li><strong>Booleanos:</strong> Valores verdadero/falso (bool)</li>
                        <li><strong>Caracteres:</strong> Símbolos individuales (char)</li>
                        <li><strong>Cadenas:</strong> Secuencias de caracteres (string)</li>
                    </ul>
                    
                    <h3>Estructuras de Control</h3>
                    <p>Permiten controlar el flujo de ejecución del programa:</p>
                    <ul>
                        <li><strong>Condicionales:</strong> if, else, switch</li>
                        <li><strong>Bucles:</strong> for, while, do-while</li>
                        <li><strong>Excepciones:</strong> try-catch para manejo de errores</li>
                    </ul>
                    
                    <h3>Principios Algorítmicos</h3>
                    <p>Conceptos clave para escribir buenos algoritmos:</p>
                    <ul>
                        <li><strong>Correctitud:</strong> El algoritmo debe resolver el problema</li>
                        <li><strong>Eficiencia:</strong> Uso óptimo de recursos (tiempo y espacio)</li>
                        <li><strong>Legibilidad:</strong> Código claro y mantenible</li>
                    </ul>
                </div>
            `
        },
        arreglos: {
            title: 'Arreglos: La estructura más básica',
            date: '05/06/2025',
            content: `
                <h2>Arreglos: La estructura más básica</h2>
                <div class="post-meta">
                    <span class="post-date">Publicado: 05/06/2025</span>
                    <span class="post-category">Arreglos</span>
                </div>
                <div class="post-content">
                    <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Arreglos y matrices">
                    
                    <p>Los arreglos son la estructura de datos más simple pero también una de las más importantes y utilizadas en programación.</p>
                    
                    <h3>Características Principales</h3>
                    <ul>
                        <li><strong>Almacenamiento contiguo:</strong> Los elementos se almacenan en posiciones de memoria consecutivas</li>
                        <li><strong>Acceso aleatorio:</strong> O(1) para acceder a cualquier elemento mediante su índice</li>
                        <li><strong>Tamaño fijo:</strong> En muchos lenguajes, el tamaño se define al crearlo</li>
                    </ul>
                    
                    <h3>Complejidad Computacional</h3>
                    <table>
                        <tr>
                            <th>Operación</th>
                            <th>Complejidad</th>
                        </tr>
                        <tr>
                            <td>Acceso</td>
                            <td>O(1)</td>
                        </tr>
                        <tr>
                            <td>Búsqueda</td>
                            <td>O(n)</td>
                        </tr>
                        <tr>
                            <td>Inserción</td>
                            <td>O(n)</td>
                        </tr>
                        <tr>
                            <td>Eliminación</td>
                            <td>O(n)</td>
                        </tr>
                    </table>
                    
                    <h3>Arreglos Dinámicos</h3>
                    <p>Estructuras que permiten cambiar de tamaño según sea necesario (ej. ArrayList en Java, List en Python).</p>
                    <p>Cuando se llenan, se crea un nuevo arreglo más grande (generalmente el doble) y se copian los elementos.</p>
                </div>
                <div class="interactive-array">
                <h3>Laboratorio de Arreglos Interactivo</h3>
                
                <div class="array-controls">
                    <div class="control-group">
                        <label for="array-size">Tamaño del arreglo:</label>
                        <input type="number" id="array-size" min="3" max="15" value="5">
                        <button id="create-array" class="array-btn">Crear Arreglo</button>
                    </div>
                    
                    <div class="control-group">
                        <label for="array-value">Valor a insertar:</label>
                        <input type="number" id="array-value">
                        <label for="array-index">Índice:</label>
                        <input type="number" id="array-index" min="0" value="0">
                        <button id="insert-value" class="array-btn">Insertar</button>
                        <button id="delete-value" class="array-btn">Eliminar</button>
                    </div>
                    
                    <div class="control-group">
                        <button id="search-value" class="array-btn">Buscar Valor</button>
                        <button id="sort-array" class="array-btn">Ordenar</button>
                        <button id="reverse-array" class="array-btn">Invertir</button>
                    </div>
                </div>
                
                <div class="array-visualization">
                    <div class="array-container" id="array-container"></div>
                    <div class="array-info" id="array-info"></div>
                </div>
                
                <div class="time-complexity">
                    <h4>Complejidad Temporal:</h4>
                    <ul>
                        <li>Acceso: O(1)</li>
                        <li>Búsqueda: O(n)</li>
                        <li>Inserción: O(n)</li>
                        <li>Eliminación: O(n)</li>
                    </ul>
                </div>
            </div>
            `
        },
        poo: {
            title: 'POO: Principios y Patrones',
            date: '01/06/2025',
            content: `
                <h2>POO: Principios y Patrones</h2>
                <div class="post-meta">
                    <span class="post-date">Publicado: 01/06/2025</span>
                    <span class="post-category">Programación Orientada a Objetos</span>
                </div>
                <div class="post-content">
                    <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Programación Orientada a Objetos">
                    
                    <p>La programación orientada a objetos (POO) revolucionó el desarrollo de software al introducir conceptos que permiten modelar el mundo real de manera más natural.</p>
                    
                    <h3>Los Cuatro Pilares</h3>
                    <ol>
                        <li><strong>Abstracción:</strong> Modelar las características esenciales</li>
                        <li><strong>Encapsulamiento:</strong> Ocultar los detalles internos</li>
                        <li><strong>Herencia:</strong> Crear jerarquías de clases</li>
                        <li><strong>Polimorfismo:</strong> Múltiples formas para un mismo método</li>
                    </ol>
                    
                    <h3>Patrones de Diseño Comunes</h3>
                    <ul>
                        <li><strong>Singleton:</strong> Garantiza una única instancia de una clase</li>
                        <li><strong>Factory:</strong> Centraliza la creación de objetos</li>
                        <li><strong>Observer:</strong> Notifica cambios a objetos dependientes</li>
                        <li><strong>Strategy:</strong> Permite intercambiar algoritmos en tiempo de ejecución</li>
                    </ul>
                    
                    <h3>Ventajas de POO</h3>
                    <ul>
                        <li>Mayor organización del código</li>
                        <li>Reutilización mediante herencia</li>
                        <li>Mantenimiento más sencillo</li>
                        <li>Modelado más intuitivo de problemas complejos</li>
                    </ul>
                </div>
            `
        },
        economia: {
            title: 'Microeconomía para Developers',
            date: '25/05/2025',
            content: `
                <h2>Microeconomía para Developers</h2>
                <div class="post-meta">
                    <span class="post-date">Publicado: 25/05/2025</span>
                    <span class="post-category">Microeconomía</span>
                </div>
                <div class="post-content">
                    <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="Microeconomía aplicada">
                    
                    <p>Los conceptos económicos pueden aplicarse en la toma de decisiones tecnológicas y en el desarrollo de software.</p>
                    
                    <h3>Costos de Oportunidad en Desarrollo</h3>
                    <p>Al elegir una tecnología o enfoque, siempre hay alternativas que quedan descartadas. Por ejemplo:</p>
                    <ul>
                        <li>Usar un framework vs. desarrollar desde cero</li>
                        <li>Invertir tiempo en testing vs. agregar nuevas features</li>
                    </ul>
                    
                    <h3>Elasticidad en Recursos Computacionales</h3>
                    <p>La elasticidad en la nube permite escalar recursos según demanda, similar a cómo las empresas ajustan producción ante cambios en el mercado.</p>
                    
                    <h3>Teoría de Juegos en UX</h3>
                    <p>Al diseñar interfaces, podemos aplicar principios como:</p>
                    <ul>
                        <li>Incentivos para comportamientos deseados</li>
                        <li>Equilibrios de Nash en sistemas multi-usuario</li>
                        <li>Minimizar fricción (costo de transacción)</li>
                    </ul>
                </div>
            `
        }
    };
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const postId = btn.getAttribute('data-post');
            const postData = postsData[postId];
            
            if (postData) {
                fullPostContent.innerHTML = postData.content;
                blogSection.classList.add('hidden');
                postDetailSection.classList.remove('hidden');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
    
    backToBlogBtn.addEventListener('click', (e) => {
        e.preventDefault();
        blogSection.classList.remove('hidden');
        postDetailSection.classList.add('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const submitBtn = this.querySelector('button[type="submit"]');
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';
            
            setTimeout(() => {
                submitBtn.textContent = 'Mensaje Enviado!';
                submitBtn.style.backgroundColor = '#28a745';
                
                setTimeout(() => {
                    contactForm.reset();
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Enviar Mensaje';
                    submitBtn.style.backgroundColor = '';
                    
                    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
                }, 2000);
            }, 1500);
        });
    }
});
function initArrayInteractive() {
    const arrayContainer = document.getElementById('array-container');
    const arrayInfo = document.getElementById('array-info');
    let currentArray = [];
    let arraySize = 5;
    
    createRandomArray();
    
    document.getElementById('create-array').addEventListener('click', createRandomArray);
    document.getElementById('insert-value').addEventListener('click', insertValue);
    document.getElementById('delete-value').addEventListener('click', deleteValue);
    document.getElementById('search-value').addEventListener('click', searchValue);
    document.getElementById('sort-array').addEventListener('click', sortArray);
    document.getElementById('reverse-array').addEventListener('click', reverseArray);
    document.getElementById('array-size').addEventListener('change', function() {
        arraySize = parseInt(this.value);
    });
    
    function createRandomArray() {
        currentArray = [];
        const size = parseInt(document.getElementById('array-size').value);
        
        for (let i = 0; i < size; i++) {
            currentArray.push(Math.floor(Math.random() * 100));
        }
        
        renderArray();
        arrayInfo.textContent = `Arreglo creado con ${size} elementos aleatorios.`;
    }
    
    function renderArray() {
        arrayContainer.innerHTML = '';
        
        currentArray.forEach((value, index) => {
            const element = document.createElement('div');
            element.className = 'array-element';
            element.textContent = value;
            element.setAttribute('data-index', index);
            arrayContainer.appendChild(element);
        });
    }
    
    function insertValue() {
        const value = parseInt(document.getElementById('array-value').value);
        const index = parseInt(document.getElementById('array-index').value);
        
        if (isNaN(value)) {
            arrayInfo.textContent = 'Por favor ingresa un valor numérico válido.';
            return;
        }
        
        if (index < 0 || index > currentArray.length) {
            arrayInfo.textContent = `Índice inválido. Debe estar entre 0 y ${currentArray.length}.`;
            return;
        }
        
        currentArray.splice(index, 0, value);
        renderArray();
        
        const elements = document.querySelectorAll('.array-element');
        elements[index].classList.add('highlight');
        
        setTimeout(() => {
            elements[index].classList.remove('highlight');
        }, 1000);
        
        arrayInfo.textContent = `Valor ${value} insertado en la posición ${index}.`;
    }
    
    function deleteValue() {
        const index = parseInt(document.getElementById('array-index').value);
        
        if (index < 0 || index >= currentArray.length) {
            arrayInfo.textContent = `Índice inválido. Debe estar entre 0 y ${currentArray.length - 1}.`;
            return;
        }
        
        const deletedValue = currentArray[index];
        currentArray.splice(index, 1);
        renderArray();
        arrayInfo.textContent = `Valor ${deletedValue} eliminado de la posición ${index}.`;
    }
    
    function searchValue() {
        const value = parseInt(document.getElementById('array-value').value);
        
        if (isNaN(value)) {
            arrayInfo.textContent = 'Por favor ingresa un valor numérico válido para buscar.';
            return;
        }
        
        const index = currentArray.indexOf(value);
        const elements = document.querySelectorAll('.array-element');
        
        if (index === -1) {
            arrayInfo.textContent = `El valor ${value} no se encuentra en el arreglo.`;
            return;
        }
        
        currentArray.forEach((val, i) => {
            if (val === value) {
                elements[i].classList.add('highlight');
            }
        });
        
        setTimeout(() => {
            elements.forEach(el => el.classList.remove('highlight'));
        }, 2000);
        
        arrayInfo.textContent = `El valor ${value} se encuentra en la posición ${index}.`;
    }
    
    function sortArray() {
        currentArray.sort((a, b) => a - b);
        renderArray();
        arrayInfo.textContent = 'Arreglo ordenado en orden ascendente.';
    }
    
    function reverseArray() {
        currentArray.reverse();
        renderArray();
        arrayInfo.textContent = 'Arreglo invertido.';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    
    const readMoreBtns = document.querySelectorAll('.read-more');
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.getAttribute('data-post') === 'arreglos') {
                setTimeout(initArrayInteractive, 100);
            }
        });
    });
});