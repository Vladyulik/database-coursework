import { Request, Response, Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const projectRouter = Router();

projectRouter
  .route('/')
  .get(async (req: Request, res: Response) => {
    try {
      const projects = await prisma.projects.findMany();
      res.status(200).json({ message: "Projects retrieved successfully", count: `${projects.length}`, projects });
    } catch (error) {
      console.error('Error retrieving projects:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  })
  .post(async (req: Request, res: Response) => {
    const { title, description } = req.body;
    try {
      const newProject = await prisma.projects.create({
        data: {
          title,
          description,
        },
      });
      res.status(201).json({ message: "Project created successfully", newProject });
    } catch (error) {
      console.error('Error creating project:', error);
      res.status(400).json({ message: 'Bad request' });
    }
  });

projectRouter
  .route('/:id')
  .get(async (req: Request, res: Response) => {
    const projectId = parseInt(req.params.id, 10);
    try {
      const project = await prisma.projects.findUnique({
        where: {
          id: projectId,
        },
      });
      if (!project) {
        res.status(404).json({ message: 'Project not found' });
        return;
      }
      res.status(200).json({ message: "Project retrieved successfully", project});
    } catch (error) {
      console.error('Error retrieving project:', error);
      res.status(500).send('Internal Server Error');
    }
  })
  .put(async (req: Request, res: Response) => {
    const projectId = parseInt(req.params.id, 10);
    const { title, description } = req.body;
    try {
      const updatedProject = await prisma.projects.update({
        where: {
          id: projectId,
        },
        data: {
          title,
          description,
        },
      });
      if (!updatedProject) {
        res.status(404).json({ message: 'Project not found' });
        return;
      }
      res.status(200).json({ message: "Project updated successfully", updatedProject });
    } catch (error) {
      console.error('Error updating project:', error);
      res.status(400).json({ message: 'Bad request' });
    }
  })
  .delete(async (req: Request, res: Response) => {
    const projectId = parseInt(req.params.id, 10);
    try {
      const deletedProject = await prisma.projects.delete({
        where: {
          id: projectId,
        },
      });
      res.json({ message: 'Project deleted successfully', deletedProject});
    } catch (error) {
      console.error('Error deleting project:', error);
      res.status(404).json({ message: 'Project not found' });
    }
  });

export { projectRouter };
