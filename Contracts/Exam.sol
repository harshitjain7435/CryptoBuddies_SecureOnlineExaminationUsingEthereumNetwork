pragma solidity ^0.4.17;
contract Exam
{
	address public administrator;
	address public student_add;
	int public qc;
	//Model a Student
	struct student_details
	{
		string USN;
		bool hasRight;
		address walletID;
		bool hasDone;
	}
	struct Question
	{
		int id;
		string q;
		string optionA;
		string optionB;
		string optionC;
		string optionD;
		int ans;
	}
	Question[] public question;
	mapping (address => student_details ) public students;
	function Exam(address admin) public {
		administrator=admin;
	}
	function givePermission(address toStudent) public 
	{
		if(msg.sender!=administrator )
		{
			return;
		}
		else
		{
			students[toStudent].hasRight=true;
		}
	}
	/*function addQuestions(string qq, string a, string b, string c, string d, string rightOption) public
	{
		if(administrator==msg.sender)
		{

		}
		else
		{
			return;
		}
	}*/
	function submitAns(string usn,uint qno,int answer) public
	{

		if(students[msg.sender].hasRight && !students[msg.sender].hasDone)
		{
			int public count;
			count=0;
			student_details storage sender= students[msg.sender];
			sender.USN=usn;
			sender.hasDone=true;
			sender.walletID=msg.sender;
			if(qno>=5 && qno<=1)
			{
				if(answer==qno)
				{
					count=count++;
				}
			}
		}
		else
		{
			return;
		}
	}
}
