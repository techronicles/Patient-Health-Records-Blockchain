// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract PatientRecords {
    struct Record {
        string ipfsHash;
        uint timestamp;
    }

    struct Patient {
        address patientAddress;
        mapping(address => bool) authorizedDoctors;
        Record[] records;
    }

    mapping(address => Patient) private patients;

    event RecordAdded(address indexed patient, string ipfsHash, uint timestamp);
    event AccessGranted(address indexed patient, address indexed doctor);
    event AccessRevoked(address indexed patient, address indexed doctor);

    modifier onlyPatient() {
        require(msg.sender == tx.origin, "Smart contract calls not allowed");
        _;
    }

    function addRecord(string memory ipfsHash) external onlyPatient {
        Patient storage patient = patients[msg.sender];
        if (patient.patientAddress == address(0)) {
            patient.patientAddress = msg.sender;
        }

        patient.records.push(Record(ipfsHash, block.timestamp));
        emit RecordAdded(msg.sender, ipfsHash, block.timestamp);
    }

    function getRecords(address patientAddress) external view returns (Record[] memory) {
        require(
            msg.sender == patientAddress || patients[patientAddress].authorizedDoctors[msg.sender],
            "Access denied"
        );
        return patients[patientAddress].records;
    }

    function grantAccess(address doctor) external onlyPatient {
        patients[msg.sender].authorizedDoctors[doctor] = true;
        emit AccessGranted(msg.sender, doctor);
    }

    function revokeAccess(address doctor) external onlyPatient {
        patients[msg.sender].authorizedDoctors[doctor] = false;
        emit AccessRevoked(msg.sender, doctor);
    }
}
