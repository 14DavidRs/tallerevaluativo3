// src/controllers/tasksController.js
const asyncHandler = require('express-async-handler');
const prisma = require('../prismaClient');

exports.getTasks = asyncHandler(async (req, res) => {
  const tasks = await prisma.task.findMany();
  res.json(tasks);
});

exports.createTask = asyncHandler(async (req, res) => {
  const { title, description } = req.body;
  const task = await prisma.task.create({
    data: { title, description }
  });
  res.status(201).json(task);
});

exports.updateTask = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  const { title, description, status } = req.body;
  const task = await prisma.task.update({
    where: { id },
    data: { title, description, status }
  });
  res.json(task);
});

exports.deleteTask = asyncHandler(async (req, res) => {
  const id = Number(req.params.id);
  await prisma.task.delete({ where: { id }});
  res.status(204).send();
});
