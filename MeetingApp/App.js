import {createStackNavigator, createSwitchNavigator} from 'react-navigation';
import login from './Telas/Login';
import menu from './Telas/Menu';
import cadastro from './Telas/Cadastro';
import cadastroperguntas from './Telas/CadastroPerguntas';
import config from './Telas/Configuracao';
import telaTeste from './Telas/telasTeste';
import telaTeste2 from './Telas/telasTeste2';
import AuthLoadingScreen from './Telas/authLoadingScreen';
import homeApp from './Telas/Home';

//pilha de navegacao para telas do usuario
const AppStack = createStackNavigator({
  Login: {screen: login},

  Home: {screen:  menu},
  Teste2: {screen: telaTeste2},
  Menu: {screen: menu},
  Teste: {screen: telaTeste},
  //Login: {screen: login},
  Configuracao: {screen: config},
  //Cadastro: {screen: cadastro},
  //CadastroPerguntas: {screen: cadastroperguntas},


});

//pilha de navegacao para telas de autenticacao
const AuthStack = createStackNavigator({
  Login: login,
  Cadastro: cadastro,
  CadastroPerguntas: cadastroperguntas,
})

//export default AppStack;

export default createSwitchNavigator (
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);
