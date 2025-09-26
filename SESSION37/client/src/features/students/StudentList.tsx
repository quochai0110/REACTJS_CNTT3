import React from 'react';
import type { Student } from './types';
import StudentItem from './StudentItem';
import { useDispatch } from 'react-redux';
import { deleteUser } from '../../store/slices/studentSlice';

interface Props {
  students: Student[];
  onEdit: (s: Student) => void;
  onDelete: (id: string) => void;
}

const StudentList: React.FC<Props> = ({ students, onEdit, onDelete }) => {
  if (students.length === 0) {
    return <div className="text-center text-gray-500 py-8">Không có học sinh nào</div>;
  }

  const dispatch:any = useDispatch()

  const handleDelete=(id:number)=>{
    dispatch(deleteUser(id));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {students.map((s:any) => (
        <StudentItem key={s.id} student={s} onEdit={onEdit} onDelete={()=>handleDelete(s.id)} />
      ))}
    </div>
  );
};

export default StudentList;
