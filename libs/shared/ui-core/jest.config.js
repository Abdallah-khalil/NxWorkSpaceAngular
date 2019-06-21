module.exports = {
  name: 'shared-ui-core',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/shared/ui-core',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
