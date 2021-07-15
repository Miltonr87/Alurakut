import MainGrid from '../src/components/MainGrid';
import Box from '../src/components/Box';



export default function Home() {
  const gitHubUser = 'miltonr87';

  return (
    <MainGrid>
      <div className="profileArea" style={{ gridArea: 'profileArea' }}>
        <Box>
          <img src={`https://github.com/${gitHubUser}.png`} style={{ borderRadius: '8px'}}/>
        </Box>
      </div>
      <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
        <Box>
          Bem Vindo
        </Box>
      </div>
      <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        <Box>
          Amigos da Programação
        </Box>
        <Box>
          Comunidades
        </Box>
      </div>
    </MainGrid>
  )
}
