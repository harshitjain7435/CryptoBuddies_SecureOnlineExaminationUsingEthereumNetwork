pragma solidity ^0.4.17;
contract Student
{
	address administrator;

	//Model a Student
	struct student_details
	{
		string USN;
		bool hasRight;
		address walletID;
	}
}
