import React from 'react'

const dataQuestion= [
  {
    name: '小数点变成百分比',
    description: '',
  }
];

class JsNormalQuestionCollection extends React.Component{

  render() {
    return (
      <div>
        <h3>JS数据相关的处理</h3>
        <div>
          57.12 百分比格式化 57.12%

          12.00 百分比格式化 12%

          12.10 百分比格式化 12.1%

          12.01 百分比格式化 12.01%

          如果小数为0的部分就省略。。。
        </div>
        <div>
          // 需求就是去0，使用parseFloat就可以了
          parseFloat(num) + '%'
        </div>

      </div>
    );
  }

}

export default JsNormalQuestionCollection;
