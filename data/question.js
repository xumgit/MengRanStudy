var questions = [
					  { 					    
					    seq: "01", //序号
					    question: "下面输出是什么?", //问题
					    url: "../../images/subject/01.png",	//题目对应的Image url
					    title: "", //如果没有Image url, 则显示题目, (目前是保留参数)
					    right: "C", //正确选项的答案				  	
					  	choices: [ //四个选项
							  		{name: "A", value: "0 1 2 and 0 1 2"},
							  		{name: "B", value: "0 1 2 and 3 3 3"},
							  		{name: "C", value: "3 3 3 and 0 1 2"},
									{name: "D", value: "3 3 3 and 3 3 3"}
							     ]
						},
						{ 					    
					    seq: "02",
					    question: "下面输出是什么?",
					    url: "../../images/subject/02.png",	
					    title: "",
					    right: "A",				  	
					  	choices: [
							  		{name: "A", value: "hello"},
							  		{name: "B", value: "undefined"},
							  		{name: "C", value: "ReferenceError"},
									{name: "D", value: "hey"}
							     ]
						},
						{ 					    
					    seq: "03",
					    question: "下面输出是什么?",
					    url: "../../images/subject/03.png",	
					    title: "",
					    right: "C",				  	
					  	choices: [
							  		{name: "A", value: "true false true"},
							  		{name: "B", value: "false false true"},
							  		{name: "C", value: "true false false"},
									{name: "D", value: "false true true"}
							     ]
						}
				   ];
module.exports = {
  data: questions
}