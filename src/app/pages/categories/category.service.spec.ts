import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CategoryService } from './category.service';
import { Categories } from 'src/app/mock-data/categories';

describe('CategoryService', () => {
  let service: CategoryService;
  let testingController: HttpTestingController;
  const baseUrl = 'http://192.168.0.21:8000/api/categories';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CategoryService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be able to get all categories', () => {
    service.getAll().subscribe(cs => {
      expect(cs).toBeTruthy();
      expect(cs.length).toBe(2);
    });

    const mockReq = testingController.expectOne(baseUrl);
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(Object.values(Categories));
  });

  it('should be able to get category by id', () => {
    service.getById('2').subscribe(c => {
      expect(c).toBeTruthy();
      expect(c.name).toBe('Grocery');
    });

    const mockReq = testingController.expectOne(baseUrl + "/2");
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(Categories[2]);
  });

  it('should be able to create category', () => {
    const newBody = { name: 'Eating Out', icon: 'hamburger', color: 'red' };

    service.create(newBody).subscribe(c => {
      expect(c).toBeTruthy();
      expect(c.color).toBe(newBody.color);
    });

    const mockReq = testingController.expectOne(baseUrl);
    expect(mockReq.request.method).toBe('POST');
    const response = {
      ...Categories[1],
      name: newBody.name,
      icon: newBody.icon,
      color: newBody.color,
      id: 3
    };
    mockReq.flush(response);
  });

  it('should be able to update category', () => {
    const changes = { name: 'Drinking Out', icon: 'beer', color: 'red' };

    service.update('1', changes).subscribe(c => {
      expect(c).toBeTruthy();
      expect(c.icon).toBe(changes.icon);
    });

    const mockReq = testingController.expectOne(baseUrl + "/1");
    expect(mockReq.request.method).toBe('PUT');
    const response = {
      ...Categories[1],
      name: changes.name,
      icon: changes.icon,
      color: changes.color,
      id: 1
    };
    mockReq.flush(response);
  });

  it('should be able to delete category', () => {
    service.delete('1').subscribe(c => {
      expect(c).toBeFalsy();
    });

    const mockReq = testingController.expectOne(baseUrl + "/1");
    expect(mockReq.request.method).toBe('DELETE');
    mockReq.flush('');
  });
});
