import { mapImageGrid, mapSectionContent, mapSectionTwoColumns, mapSections, mapTextGrid } from './map-sections';

describe('map-sections', () => {
  it('should render predefined section if no data ', () => {
    const data = mapSections();
    expect(data).toEqual([]);
  });

  it('should map section two columns withtout data', () => {
    const data = mapSectionTwoColumns();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.srcImg).toBe('');
    expect(data.text).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section two columns with data', () => {
    const data = mapSectionTwoColumns({
      __component: 'section.section-two-columns',
      title: 'Title',
      description: 'Test',
      metadata: {
        background: true,
        section_id: 'home',
        name: 'Home',
      },
      image: {
        url: 'a.svg',
      },
    });
    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-two-columns');
    expect(data.sectionId).toBe('home');
    expect(data.srcImg).toBe('a.svg');
    expect(data.text).toBe('Test');
    expect(data.title).toBe('Title');
  });

  it('should map section content without data', () => {
    const data = mapSectionContent();
    expect(data.background).toBe(false);
    expect(data.component).toBe('');
    expect(data.sectionId).toBe('');
    expect(data.html).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section content with data', () => {
    const data = mapSectionContent({
      __component: 'section.section-content',
      _id: '602fdf2d540c00269e056173',
      title: 'Test',
      content: '<p>Test.</p>',
      metadata: {
        background: false,
        _id: '602fdf2d540c00269e05617a',
        name: 'intro',
        section_id: 'intro',
        __v: 0,
        id: '602fdf2d540c00269e05617a',
      },
      __v: 1,
      id: '602fdf2d540c00269e056173',
    });
    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-content');
    expect(data.sectionId).toBe('intro');
    expect(data.html).toBe('<p>Test.</p>');
    expect(data.title).toBe('Test');
  });

  it('should map section text grid with data', () => {
    const data = mapTextGrid({
      __component: 'section.section-grid',
      description: 'Test',
      title: 'My Grid',
      text_grid: [
        {
          title: 'Teste 1',
          description: 'Test',
        },
      ],
      image_grid: [],
      metadata: {
        background: true,
        name: 'grid-one',
        section_id: 'grid-one',
      },
    });

    expect(data.background).toBe(true);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('grid-one');
    expect(data.description).toBe('Test');
    expect(data.title).toBe('My Grid');
    expect(data.grid[0].title).toBe('Teste 1');
    expect(data.grid[0].description).toBe('Test');
  });

  it('should map section text grid without data', () => {
    const data = mapTextGrid(undefined);

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-text');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.title).toBe('');
  });

  it('should map section image grid with data', () => {
    const data = mapImageGrid({
      __component: 'section.section-grid',
      description: 'Test',
      title: 'Gallery',
      text_grid: [],
      image_grid: [
        {
          image: {
            alternativeText: 'Uma paisagem com céu claro e montanhas bonitas',
            url: 'a.jpg',
          },
        },
      ],
      metadata: {
        background: false,
        name: 'gallery',
        section_id: 'gallery',
      },
    });

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('gallery');
    expect(data.description).toBe('Test');
    expect(data.title).toBe('Gallery');
    expect(data.grid[0].altText).toBe('Uma paisagem com céu claro e montanhas bonitas');
    expect(data.grid[0].srcImg).toBe('a.jpg');
  });

  it('should map section image grid without data', () => {
    const data = mapImageGrid(undefined);

    expect(data.background).toBe(false);
    expect(data.component).toBe('section.section-grid-image');
    expect(data.sectionId).toBe('');
    expect(data.description).toBe('');
    expect(data.title).toBe('');
  });
});
