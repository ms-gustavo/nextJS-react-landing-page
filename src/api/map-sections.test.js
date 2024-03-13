import { mapSectionContent, mapSectionTwoColumns, mapSections } from './map-sections';

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
      _id: '602fdf2d540c00269e056172',
      title: 'Title',
      description: 'Test',
      metadata: {
        background: true,
        _id: '602fdf2d540c00269e05617f',
        section_id: 'home',
        name: 'Home',
        __v: 0,
        id: '602fdf2d540c00269e05617f',
      },
      __v: 1,
      image: {
        _id: '602fdc2b540c00269e05616a',
        name: 'javascript.svg',
        alternativeText: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        caption: 'Desenho de pessoas segurando logos do CSS, JS e HTML',
        hash: 'javascript_b57bf48cda',
        ext: '.svg',
        mime: 'image/svg+xml',
        size: 30.31,
        url: 'a.svg',
        provider_metadata: {
          public_id: 'javascript_b57bf48cda',
          resource_type: 'image',
        },
        provider: 'cloudinary',
        width: 1030,
        height: 730,
        related: ['602fdf2d540c00269e056178', '602fdf2d540c00269e056172'],
        createdAt: '2021-02-19T15:41:31.808Z',
        updatedAt: '2021-02-19T15:54:22.590Z',
        __v: 0,
        id: '602fdc2b540c00269e05616a',
      },
      id: '602fdf2d540c00269e056172',
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
});
