========
Material
========

.. TEMPLATE
.. ``parameter_name``
..     * Optional:
..     * Type:
..     * Description:

.. ``monitor_file`` (Confirmation needed)
..     * Type: Path
..     * Description: The path to a text file in which Hercules would write information as it runs for users to monitor jobs.

.. ``planes_input_file``
..     * Type: Path
..     * Description: The path to plane input file (The input file itself). This should not be necessary and it will be deprecated in the future.

.. ``mesh_etree_output_file``
..     * Type: Path
..     * Description: The path to mesh file in etree format.

``cvmdb_input_file``
    * Type: Path/profile
    * Description: The path to the material information (crustal structure) database. A special way to assign the crustal structure is setting this parameter to "profile", i.e.

    .. code-block::

        cvmdb_input_file = profile

    * By doing so, Hercules will use the crustal structure provided by parameters ``number_profile_layers`` and ``profile_layers`` in the same input file.


``Istanbul_material_model``
    * Type: Yes or No
    * Description: Whether to use the material database developed for the Istanbul or not. If this parameter is set to ``yes``, Hercules will replace the crustal structure information in the region that is covered by the Istanbul material database. For the rest of the region, the material information is still provided by the database or the profile that is assigned with the parameter ``cvmdb_input_file``.


``number_profile_layers``
    * Type: Integer
    * Description: How many layers are the parameter ``profile_layers`` defines.


``profile_layers``
    * Type: Multiple numbers
    * Format: ``z_top Vp Vs rho Qp Qs``
    * Description: The crustal structure information defined for a layered half-space. The data should be written as many lines as parameter ``number_profile_layers`` defines. ``z_top`` is the depth (in meter), ``Vp`` and ``Vs`` are velocities for compressional and shear waves (in meter/second), ``rho`` is the density (in kg/meter :superscript:`3`), and ``Qp`` and ``Qs`` are Q factor damping.


