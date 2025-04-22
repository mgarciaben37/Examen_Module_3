import { Request, Response } from 'express';
import { vi } from 'vitest';
import { ProductsController } from './products.controller';

describe('ProductsController', () => {
    test('should call json when repo response is valid ', async () => {
        const mockRepo = {
            read: vi.fn().mockResolvedValue([]),
        };

        const req = {} as Request;

        const res = {
            json: vi.fn(),
        } as unknown as Response;

        const next = vi.fn();

        const productsController = new ProductsController(mockRepo);

        await productsController.getAll(req, res, next);

        expect(mockRepo.read).toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({
            results: [],
            error: '',
        });
    });

    test('should call next when repo throw an error ', async () => {
        const error = new Error('Error');

        const mockRepo = {
            read: vi.fn().mockRejectedValue(error),
        };

        const req = {} as Request;

        const res = {
            json: vi.fn(),
        } as unknown as Response;

        const next = vi.fn();

        const productsController = new ProductsController(mockRepo);

        await productsController.getAll(req, res, next);

        expect(next).toHaveBeenCalledWith(error);
    });

    test('should call json when repo response is valid ', async () => {
        const mockRepo = {
            readById: vi.fn().mockResolvedValue({}),
        };

        const req = {
            params: { id: '1' },
        } as unknown as Request;

        const res = {
            json: vi.fn(),
        } as unknown as Response;

        const next = vi.fn();

        const productsController = new ProductsController(mockRepo);

        await productsController.getById(req, res, next);

        expect(mockRepo.readById).toHaveBeenCalledWith('1');
        expect(res.json).toHaveBeenCalledWith({
            results: [{}],
            error: '',
        });
    });

    test('should call next when repo throw an error ', async () => {
        const error = new Error('Error');

        const mockRepo = {
            readById: vi.fn().mockRejectedValue(error),
        };

        const req = {
            params: { id: '1' },
        } as unknown as Request;

        const res = {
            json: vi.fn(),
        } as unknown as Response;

        const next = vi.fn();

        const productsController = new ProductsController(mockRepo);

        await productsController.getById(req, res, next);

        expect(next).toHaveBeenCalledWith(error);
    });

    test('should call delete receiving valid data', async () => {
        const mockRepo = {
            delete: vi.fn().mockResolvedValue({}),
        };

        const req = {
            params: { id: '1' },
        } as unknown as Request;

        const res = {
            json: vi.fn(),
        } as unknown as Response;

        const next = vi.fn();

        const productsController = new ProductsController(mockRepo);

        await productsController.delete(req, res, next);

        expect(mockRepo.delete).toHaveBeenCalledWith('1');
        expect(res.json).toHaveBeenCalledWith({
            results: [{}],
            error: '',
        });
    });

    test('should call delete receiving an error', async () => {
        const error = new Error('Error');

        const mockRepo = {
            delete: vi.fn().mockRejectedValue(error),
        };

        const req = {
            params: { id: '1' },
        } as unknown as Request;

        const res = {
            json: vi.fn(),
        } as unknown as Response;

        const next = vi.fn();

        const productsController = new ProductsController(mockRepo);

        await productsController.delete(req, res, next);

        expect(mockRepo.delete).toHaveBeenCalledWith('1');
        expect(next).toHaveBeenCalledWith(error);
    });

    test('should call create receiving valid data', async () => {
        const mockRepo = {
            create: vi.fn().mockResolvedValue({}),
        };

        const req = {
            body: {},
        } as unknown as Request;

        const res = {
            json: vi.fn(),
            status: vi.fn(),
        } as unknown as Response;

        const next = vi.fn();

        const productsController = new ProductsController(mockRepo);

        await productsController.create(req, res, next);

        expect(mockRepo.create).toHaveBeenCalledWith({});
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith({
            results: [{}],
            error: '',
        });
    });

    test('should call create receiving an error', async () => {
        const error = new Error('Error');

        const mockRepo = {
            create: vi.fn().mockRejectedValue(error),
        };

        const req = {
            body: {},
        } as unknown as Request;

        const res = {
            json: vi.fn(),
        } as unknown as Response;

        const next = vi.fn();

        const productsController = new ProductsController(mockRepo);

        await productsController.create(req, res, next);

        expect(mockRepo.create).toHaveBeenCalledWith({});
        expect(next).toHaveBeenCalledWith(error);
    });

    test('should call update receiving valid data', async () => {
        const mockRepo = {
            update: vi.fn().mockResolvedValue({}),
        };

        const req = {
            params: { id: '1' },
            body: {},
        } as unknown as Request;

        const res = {
            json: vi.fn(),
        } as unknown as Response;

        const next = vi.fn();

        const productsController = new ProductsController(mockRepo);

        await productsController.update(req, res, next);

        expect(mockRepo.update).toHaveBeenCalledWith('1', {});
        expect(res.json).toHaveBeenCalledWith({
            results: [{}],
            error: '',
        });
    });

    test('should call update receiving an error', async () => {
        const error = new Error('Error');

        const mockRepo = {
            update: vi.fn().mockRejectedValue(error),
        };

        const req = {
            params: { id: '1' },
            body: {},
        } as unknown as Request;

        const res = {
            json: vi.fn(),
        } as unknown as Response;

        const next = vi.fn();

        const productsController = new ProductsController(mockRepo);

        await productsController.update(req, res, next);

        expect(mockRepo.update).toHaveBeenCalledWith('1', {});
        expect(next).toHaveBeenCalledWith(error);
    });
});
