import React from "react";
import Article from "./Article";


function ArticleList() {
   return(
    <React.Fragment>
        <Article title='Javascript' date='September 7, 2021' preview='What do you know about Javascript'/>
        <Article title = 'ruby on rails' date='June 16, 2020' preview='What do you know about Ruby on Rails'/>
        <Article title = 'python' date='march 21, 2022' preview='What do you know about Python'/>
        <Article title = 'PLC' date='December 2, 2021' preview='What do you know about PLC'/>
        <Article title = 'C++' date='July 27, 2022' preview='What do you know about c++'/>
    </React.Fragment>
   ) 
}
export default ArticleList