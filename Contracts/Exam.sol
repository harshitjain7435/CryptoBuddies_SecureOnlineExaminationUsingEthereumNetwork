pragma solidity ^0.4.17;
contract Exam
{
	address administrator;
	address public student_add;
	int public qc;
	//Model a Student
	struct student_details
	{
		string USN;
		bool hasRight;
		address walletID;
	}
	struct Question
	{
		int id;
		string q;
		string optionA;
		string optionB;
		string optionC;
		string optionD;
		string ans;
	}
	Question[] public question;
	mapping (address => student_details ) public students;
	function givePermission(address toStudent) public 
	{
		if(msg.sender!=administrator || students[toStudent].hasRight)
		{
			return;
		}
		else
		{
			students[toStudent].hasRight=true;
		}
	}
	function addQuestions(string qq, string a, string b, string c, string d, string rightOption) public
	{
		if(administrator==msg.sender)
		{

		}
		else
		{
			return;
		}
	}
	function submitAns(string[] answers) public
	{
		if(students[msg.sender].hasRight)
		{

		}
		else
		{
			return;
		}
	}
}
