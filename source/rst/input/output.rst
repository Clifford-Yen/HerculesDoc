===============
Output settings
===============

``output_mesh``
    * Type: Boolean (0 or 1)
    * Description: Whether Hercules should print the output information for the mesh.

``output_displacement``
    * Type: Boolean (0 or 1)
    * Description: Whether Hercules should print the output information for the displacement.

``output_velocity``
    * Type: Boolean (0 or 1)
    * Description: Whether Hercules should print the output information for the velocity.

``output_parallel`` (Confirmation Needed)
    * Type: Boolean (0 or 1)
    * Description: Whether Hercules should print the output information for the parallel.

``simulation_output_rate``
    * Type: Integer
    * Description: The rate Hercules saves output data for the mesh, the displacement, and the velocity. For example, if you set :code:`simulation_output_rate = 2`, it means Hercules would store output data every 2 time steps.

``output_displacement_file``
    * Type: File path
    * Description: The path to the displacement output file.

``output_velocity_file``
    * Type: File path
    * Description: The path to the velocity output file.

``output_stats_file``
    * Type: File path
    * Description: The path to the status output file.
