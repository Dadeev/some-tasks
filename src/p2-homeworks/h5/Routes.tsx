import React from 'react'
// import {Redirect, Route, Switch} from "react-router-dom";
// import PreJunior from "./pages/PreJunior";
// import {Junior} from "./pages/Junior";
// import {JuniorPlus} from "./pages/JuniorPlus";
// import Error404 from "./pages/Error404";
//
// export const PATH = {
//     PRE_JUNIOR: '/pre-junior',
//     JUNIOR: '/junior',
//     JUNIOR_PLUS: '/junior-plus'
// }
//
// function Routes() {
//     return (
//         <div>
//             {/*Switch выбирает первый подходящий роут*/}
//             <Switch>
//
//                 {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
//                 {/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/}
//                 <Route path={'/'} element={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>
//
//                 <Route path={PATH.PRE_JUNIOR} element={() => <PreJunior/>}/>
//                 <Route path={PATH.JUNIOR} element={() => <Junior/>}/>
//                 <Route path={PATH.PRE_JUNIOR} element={() => <JuniorPlus/>}/>
//
//                 {/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/}
//                 <Route element={() => <Error404/>}/>
//
//             </Switch>
//         </div>
//     )
// }
//
// export default Routes
