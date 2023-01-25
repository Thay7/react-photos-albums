import { MainRoutes } from './routes/MainRoutes'

const App = () => {
  return (
    <div>
      <main style={{}}>
     <h1 style={{textAlign: 'center', backgroundColor: '#396d7c', color: '#FFF',  borderRadius: '10px', padding: '10px'}}>Album de Fotos!</h1>
     <MainRoutes/>
     </main>
     <footer style={{backgroundColor: '#396d7c', borderRadius: '10px'}}>
            <p style={{textAlign: 'center', color: '#FFF', fontWeight: 'bold', fontSize: '20px' ,padding: '10px'}}>Feito por Thay</p>
        </footer>
    </div>
  )
}

export default App
