import type { Data, Student } from '../utils/types';
import StudentForm from '../components/StudentForm';
import StudentList from '../components/StudentList';
import Toolbar from '../components/Toolbar';

import { useSelector } from 'react-redux';

const StudentManagement = () => {
   const students = useSelector((data:Data)=>{
          return data.users
   })
  const handleAddStudent = (student: Student) => {
  };

  const handleSearch = (keyword: string) => {
   
  };

  return (
    <div className="flex gap-6 p-6">
      <div className="flex-1">
        <Toolbar onSearch={handleSearch} />
        <StudentList students={students} />
      </div>
      <StudentForm onSubmit={handleAddStudent} />
    </div>
  );
};

export default StudentManagement;
