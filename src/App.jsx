import { useState } from 'react'
import Card from './components/Card'
function App() {
  return (
    <>
    <Card name="sushant" description="hello john" image="https://imgs.search.brave.com/pd-pEHLBWXs7hO-78m_Tt4EmzrKT_Y1Vuh32mbNSNkM/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvdG9t/LWFzcGluYWxsLWFu/ZC1vcHBvbmVudHMt/eDZjZjRraXBvM3p5/OGRpZS5qcGc"/>
    <Card name="dianasour" description="hello hello" image="https://imgs.search.brave.com/z4IfPZcFLauwSKlDTY6j8dXni4iedzlfmzAOxnCKdrg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvdG9t/LWFzcGluYWxsLWFu/ZC1jeXJpbC1nYW5l/LXI1aDJnaGF3MHVh/ODN4a2guanBn"/>
    <Card name="chwingum" description="hello samosa"/>
    </>
  )
}

export default App
