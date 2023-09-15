import React, { useState } from 'react';
import Module1 from '../pages/Exercises/Module1';
import Module2 from '../pages/Exercises/Module2';

const exercises = [
  { id: 1, name: 'Module 1' },
  { id: 2, name: 'Module 2' },
];

export default function ExerciseList() {
  const [selectedExercise, setSelectedExercise] = useState(null);

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise);
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64">
      <h1 className="font-bold text-4xl sm:text-5xl mt-8 mb-4">Exercises</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {exercises.map((exercise) => (
          <div
            key={exercise.id}
            onClick={() => handleExerciseClick(exercise)}
            className="cursor-pointer rounded-lg p-3 bg-red-400 text-white font-bold hover:bg-yellow-400"
          >
            {exercise.name}
          </div>
        ))}
      </div>
      <div className="mt-8">
        {selectedExercise === null ? (
          <p></p>
        ) : selectedExercise.id === 1 ? (
          <Module1 />
        ) : selectedExercise.id === 2 ? (
          <Module2 />
        ) : (
          <p>Module not found.</p>
        )}
      </div>
    </div>
  );
}

