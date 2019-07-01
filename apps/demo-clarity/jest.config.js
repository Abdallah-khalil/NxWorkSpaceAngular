module.exports = {
  name: 'demo-clarity',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/demo-clarity',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
